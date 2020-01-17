import gql from "graphql-tag";

export default class Queries {
    static get getProfile() {
        return gql`
      query get_profile{
        get_profile{
        _id
        facebook{
          token
          id
        }
       }
      }
    `;
    }

}