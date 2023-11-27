import { z } from "zod"

export const completeProfileSchema = z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    age: z.string({
        required_error: "Age is required"
    }),
    location: z.string({
        required_error: "Location is required"
    })
})