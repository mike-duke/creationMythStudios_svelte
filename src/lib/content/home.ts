import type { Picture } from "vite-imagetools";

// To add a testimonial photo, import it here with the `?enhanced` query so it
// gets optimized at build time, then assign it to a testimonial's `image`
// (see the first testimonial below for a working example).
import mikeHeadshot from "$lib/images/headshot_square_compressed.jpg?enhanced";
import dukeHeadshot from "$lib/images/headshot_square_compressed.jpg?enhanced";
import guyHeadshot from "$lib/images/headshot_square_compressed.jpg?enhanced";

export type Testimonial = {
  clientName: string;
  quote: string;
  // An enhanced image (imported with `?enhanced`). Optional until you add one.
  image?: Picture;
};

export type Home = {
  siteHeading: string;
  lede: string;
  aboutHeading: string;
  aboutPara: string;
  servicesHeading: string;
  servicesPara: string;
  testimonialsHeading: string;
  testimonials: Testimonial[];
};

export const home: Home = {
  siteHeading: "Welcome, Writer!",
  lede: "A writing project can be a long and lonely road. I'd like to help you walk it a while.",
  aboutHeading: "Who am I?",
  aboutPara:
    "My name is Mike. I'm a writer. I've been calling myself a writer for over 30 years. In that time, I've been learning what makes a great story, and more importantly, how to help other writers make their stories great. And now, I want to help you, too!",
  servicesHeading: "Upgrade Your Story",
  servicesPara:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  testimonialsHeading: "What Clients Are Saying....",
  testimonials: [
    {
      clientName: "Mike",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: mikeHeadshot,
    },
    {
      clientName: "Duke",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      image: dukeHeadshot,
    },
    {
      clientName: "The other guy",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: guyHeadshot,
    },
  ],
};
