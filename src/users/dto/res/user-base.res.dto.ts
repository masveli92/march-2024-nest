export class UserBaseResDto {
  // @ApiResponseProperty({
  //   type: String,
  // })
  id: string;
  name: string;
  age?: number;
  email: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}
