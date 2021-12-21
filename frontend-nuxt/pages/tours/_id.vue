<template>
	<main class="o-main">
		<LayoutSection id="header">
			<LayoutEmpty>
				<ContentImage
					:src="'http://localhost:1337' + tour.Cover.url"
					v-if="!this.$apollo.queries.tour.loading" />
			</LayoutEmpty>

			<LayoutSquare
				name="color--transparent"
				v-if="!this.$apollo.queries.tour.loading">
				<ContentGrid
					class="o-grid--right"
					style="border-right: none"
					:content="tour"></ContentGrid>
			</LayoutSquare>
		</LayoutSection>

		<section class="c-tour">
			<div v-if="$nuxt.$fire.auth.currentUser">
				<!-- <button>Place a reservation</button> -->
				<form class="c-form" @submit.prevent="placeReservation">
					<h3>{{ Notification }}</h3>
					<h1>Reservation</h1>
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
			<div
				v-else
				style="
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				">
				You must login to book a tour
				<nuxt-link :to="localePath('/auth/login')">Login</nuxt-link>
				<nuxt-link :to="localePath('/auth/signup')">Signup</nuxt-link>
			</div>
		</section>
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
			Notification: '',
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

			this.Notification = 'Reserved successfully!';
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

<style lang="scss">
.c-tour {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	min-height: 10vh;
}

.c-form {
	padding: 10vh;
}
.c-label {
	margin-top: 0.5vw;
}
.c-input {
	margin-bottom: 1vw;
}
</style>
