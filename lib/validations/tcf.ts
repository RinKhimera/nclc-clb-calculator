import * as z from "zod"

export const tcfSchema = z.object({
  listening: z.coerce
    .number()
    .int()
    .gte(331, { message: "La valeur doit être supérieure ou égale à 331" })
    .lte(699, { message: "La valeur doit être inférieure ou égale à 699" })
    .nullable(),

  reading: z.coerce
    .number()
    .int()
    .gte(342, { message: "La valeur doit être supérieure ou égale à 342" })
    .lte(699, { message: "La valeur doit être inférieure ou égale à 699" })
    .nullable(),

  speaking: z.coerce
    .number()
    .int()
    .gte(4, { message: "La valeur doit être supérieure ou égale à 4" })
    .lte(20, { message: "La valeur doit être inférieure ou égale à 20" })
    .nullable(),

  writing: z.coerce
    .number()
    .int()
    .gte(4, { message: "La valeur doit être supérieure ou égale à 4" })
    .lte(20, { message: "La valeur doit être inférieure ou égale à 20" })
    .nullable(),
})
