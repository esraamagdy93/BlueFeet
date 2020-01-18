import gql from "graphql-tag";

export default class Queries {

    static get register() {
        return gql`
        mutation register($user: INPUT_USER!) {
            register(user: $user) {
            _id
          }
        }
        `;
    }

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