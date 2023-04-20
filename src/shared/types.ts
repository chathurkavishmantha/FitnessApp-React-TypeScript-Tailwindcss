export enum SelectedPage {
    Home = "home",
    Benefit = "benefit",
    OurClasses = "ourClasses",
    ContactUs = "contactUs",
}


export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}