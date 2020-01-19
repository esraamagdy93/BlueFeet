import gql from "graphql-tag";

export default class Queries {

    static get getCourts() {
        return gql`
      query  get_courts($lng: Float!, $lat: Float!) {
        get_courts(lng: $lng, lat: $lat) {
        _id
        address
        name{
          en
        }
        images
        daySlots{
          from
          to
          
        }
        price{
          day
          price
        }
    }
}
    `;
    }

    static get createReservation() {
        return gql`
        mutation create_reservation($reservation: INPUT_SLOT!) {
          create_reservation(reservation: $reservation) {
            _id
            status
          }
        }
        `;
      }

}