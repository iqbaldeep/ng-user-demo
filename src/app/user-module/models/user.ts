/**
 * Created by Iqbaldeep_Singh on 3/4/2017.
 */
export class User {

  constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public dob: string,
      public name ?:  string
  ) {  }
}
