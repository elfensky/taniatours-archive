<template>
	<main class="o-main">
		<LayoutSection id="tours">
			<LayoutSquare v-if="!this.$apollo.queries.tour.loading" name="tour">
				<ContentGrid :content="tour"></ContentGrid>
				<div v-if="$nuxt.$fire.auth.currentUser" style="margin-top: 10vh">
					<!-- <button>Place a reservation</button> -->
					<form class="c-form" @submit.prevent="placeReservation">
						<label for="datetime" class="c-label">Date & Time</label>
						<input
							class="c-input"
							type="datetime-local"
							id="datetime"
							name="datetime"
							v-model="formData.reservartionDate"
							required />

						<label for="peopleAmount" class="c-label">How many people</label>
						<input
							class="c-input"
							type="number"
							id="peopleAmount"
							name="peopleAmount"
							min="1"
							max="10"
							v-model="formData.amountOfPeople"
							required />
						<input type="submit" value="Place Reservation" />
					</form>
				</div>
				<div v-else>You must login to book a tour</div>
			</LayoutSquare>
		</LayoutSection>
	</main>
</template>

<script>
import Vue from 'vue';
import gql from 'graphql-tag';

const CREATE_RESERVATION = gql`
	mutation CreateReservation($data: ReservationsInput!) {
		createReservation(data: $data) {
			uuid
			userid
			tourid
			requested_datetime
			order_datetime
		}
	}
`;

export default Vue.extend({
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
			id: this.$route.params.id,
			formData: {
				currentDate: new Date().toISOString(),
				reservartionDate: '2022-01-01T12:00',
				amountOfPeople: 1,
			},
		};
	},
	mounted() {
		this.currentLocale;
		this.id = this.$route.params.id;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	methods: {
		async placeReservation() {
			// console.log(this.formData.reservartionDate);
			// console.log(this.$nuxt.$fire.auth.currentUser.uid);
			// console.log(typeof parseInt(this.id));
			// console.log(this.formData.currentDate);

			this.$apollo.mutate({
				client: 'express',
				mutation: CREATE_RESERVATION,
				variables: {
					data: {
						userid: this.$nuxt.$fire.auth.currentUser.uid,
						tourid: parseInt(this.id),
						requested_datetime: this.formData.reservartionDate,
						order_datetime: this.formData.currentDate,
					},
				},
			});
		},
	},
	updated() {
		this.currentLocale;
		this.id;
	},
	apollo: {
		$client: 'strapi',
		tour: {
			query: gql`
				query getTour($id: ID!) {
					tour(id: $id) {
						Title
						LengthInMinutes
						Description
						Cover {
							url
						}
					}
				}
			`,
			variables() {
				return {
					id: this.$route.params.id,
				};
			},
			prefetch: true,
		},
	},
});
</script>
