export type LinkedInCard = {
  name: string;
  subtitle: string;
  buttonLabel: string;
  href: string;
  avatarVariant: "brand" | "person";
};

export const LINKEDIN_CARDS: LinkedInCard[] = [
  {
    name: "Trap Plan",
    subtitle: "About influencer marketing,\nReddit campaigns and game\npromotion strategies",
    buttonLabel: "Follow us",
    href: "https://www.linkedin.com/company/trapplan",
    avatarVariant: "brand",
  },
  {
    name: "Pavel Beresnev",
    subtitle: "About agency growth and\ngame promotion",
    buttonLabel: "Follow us",
    href: "https://www.linkedin.com/in/pberesnev/",
    avatarVariant: "person",
  },
];
