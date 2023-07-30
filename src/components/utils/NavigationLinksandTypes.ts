export interface NavigationTypes {
  label: String;
  href: String;
  isDropdown: boolean;
  dropDownData?: Array<NavigationTypes>;
}

export const NavigationLinksData: Array<NavigationTypes> = [
  {
    label: "Male",
    href: "/male",
    isDropdown: true,
    dropDownData: [
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Female",
    href: "/female",
    isDropdown: false,
  },
  {
    label: "Kids",
    href: "/kids",
    isDropdown: true,
    dropDownData: [
      {
        label: "Shoes",
        href: "/kids/shoes",
        isDropdown: false,
      },
    ],
  },
  {
    label: "All Products",
    href: "/all-products",
    isDropdown: false,
  },
];
