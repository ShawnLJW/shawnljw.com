import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
    }),
});

const experience = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        company: reference("companies"),
        startDate: z.date(),
        endDate: z.date(),
    }),
});

const companies = defineCollection({
    type: "data",
    schema: ({ image }) => z.object({
        name: z.string(),
        logo: image(),
    }),
});

export const collections = {blog, experience, companies};