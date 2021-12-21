<template>
	<main class="o-main">
		<!-- //o-container c-profile -->
		<LayoutSection id="header">
			<!-- <LayoutEmpty /> -->
			<LayoutSquare name="color--solid">
				<ContentGrid style="border-right: none" :content="userData"></ContentGrid>
			</LayoutSquare>

			<div style="display: flex; flex-grow: 1" class="c-reservations">
				<table
					id="reservations"
					class="c-reservations__table"
					v-if="!this.$apollo.queries.getReservationsByUser.loading">
					<tr class="c-reservations__row">
						<th>Tour</th>
						<th>Reservation</th>
						<th>Delete</th>
					</tr>
					<tr
						:id="item.uuid"
						class="c-reservations__row"
						v-for="item in getReservationsByUser"
						:key="item.uuid">
						<td>{{ item.tourid }}</td>
						<td>{{ humanTime(item.requested_datetime) }}</td>
						<!-- <button>Edit</button> -->
						<td>
							<button @click="deleteReservationV2(item.uuid)">
								Delete
							</button>
						</td>
					</tr>
				</table>
			</div>

			<!-- show all reservations if admin -->
			<!-- <div v-if=""></div> -->
		</LayoutSection>

		<!-- <div> -->
		<!-- <h1 style="margin-top: 200px">WELCOME</h1>
			<pre class="prettyprint lang-json"><code>
				{{ JSON.stringify($nuxt.$fire.auth.currentUser, null, 2) }} -->
		<!-- {{ $nuxt.$fire.auth.currentUser }} -->
		<!-- </code></pre> -->
		<!-- <div id="locale" style="text-align: right; position: absolute">
			{{ $i18n.locale }}
		</div> -->
		<!-- <p>
				Header that shows userinfo like twitch with an edit button to
				edit it "inside" the header <br />
				-> avatar, phone#, full name, email, means of contact (social
				media?)
			</p>
			<p>
				ul-li (list view) of all your reservations.<br />
				TOURNAME(links to tour) -- DATE -- TIME -- AMOUNT OF PPL -- PRICE
				-- APPROVED? -- CANCEL-BUTTON
			</p>
		</div> -->
		<!-- <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"></script> -->
	</main>
</template>

<script>
import Vue from 'vue'; //when used with ts, it fucks up Apollo
import gql from 'graphql-tag';
// import gql from '@nuxtjs/apollo'

const DELETE_RESERVATION = gql`
	mutation removeReservationByUuid($uuid: String!) {
		removeReservationByUuid(uuid: $uuid) {
			uuid
		}
	}
`;

function startAnimations() {
	gsap.to('.o-grid__title', { duration: 1, color: 'red' });
}

export default Vue.extend({
	middleware: 'auth',
	// computed: {},
	data() {
		return {
			currentLocale: this.$nuxt.$i18n.locale,
			userData: {
				Title: 'Welcome',
				Subtitle: this.$nuxt.$fire.auth.currentUser.email,
				Description: 'You can see and your reservations on the right',
			},
			userUID: this.$nuxt.$fire.auth.currentUser.uid,
			// currentData: awaitthis.apollo.homePage,
		};
	},
	mounted() {
		// this.startAnimations();

		this.currentLocale;
	},
	layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
	created() {
		// this.currentLocale;
	},
	methods: {
		humanTime(time) {
			// return time;
			// console.log(time);
			let readable = new Date(time);
			return readable;
			// newDate.setTime(time * 1000);
			// let date = newDate.toUTCString();
			// return date;
		},
		async DeleteReservation(uuid) {
			console.log('attempting delete');
			try {
				const res = await this.$apollo.mutation({
					query: gql`
						mutation removeReservationByUuid($uuid: String!) {
							removeReservationByUuid(uuid: $uuid) {
								uuid
							}
						}
					`,
					variables: {
						name: uuid,
					},
				});
			} catch (err) {
				console.log(err);
			}
		},
		deleteReservationV2: function (uuid) {
			this.$apollo.mutate({
				mutation: DELETE_RESERVATION,
				variables: {
					uuid: uuid,
				},
			});
			//cant figure out how to make it reactive
			document.getElementById(uuid).remove();
			//I should probably simply refetch the original query?
		},
	},
	updated() {
		this.currentLocale;
	},
	apollo: {
		$client: 'express',
		getReservationsByUser: {
			query: gql`
				query getReservationsByUser($uid: String!) {
					getReservationsByUser(uid: $uid) {
						uuid
						userid
						tourid
						requested_datetime
						order_datetime
					}
				}
			`,
			variables() {
				return {
					uid: this.$nuxt.$fire.auth.currentUser.uid,
				};
			},
			prefetch: false,
		},
	},
});
// console.log(getReservationsByUser);
</script>

<style lang="scss" scoped>
//a comment inside css to check scss works
.c-profile {
	display: flex;
}
</style>
