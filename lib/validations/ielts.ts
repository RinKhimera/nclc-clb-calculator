import * as z from "zod"

export const ieltsSchema = z.object({
  listening: z.coerce
    .number()
    .gte(4.5, { message: "Value must be greater than or equal to 4.5" })
    .lte(10, { message: "Value must be less than or equal to 10" }),

  reading: z.coerce
    .number()
    .gte(3.5, { message: "Value must be greater than or equal to 3.5" })
    .lte(10, { message: "Value must be less than or equal to 10" }),

  speaking: z.coerce
    .number()
    .gte(4, { message: "Value must be greater than or equal to 4" })
    .lte(10, { message: "Value must be less than or equal to 10" }),

  writing: z.coerce
    .number()
    .gte(4, { message: "Value must be greater than or equal to 4" })
    .lte(10, { message: "Value must be less than or equal to 10" }),
})
