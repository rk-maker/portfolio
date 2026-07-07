import { defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Info",
  type: "document",
  options: {},
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      description: "Primary email address",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Phone number to display and call",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
      description: "Link to your LinkedIn profile",
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      description: "Link to your GitHub profile",
    }),
    defineField({
      name: "mailToUrl",
      title: "Mail Link",
      type: "url",
      description: "Use this for the mail icon and mail button",
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter/X URL",
      type: "url",
      description: "Link to your Twitter/X profile",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Info",
      };
    },
  },
});
