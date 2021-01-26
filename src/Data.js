import {
	NavItemsEn,
	HeroEn,
	ServQuoteEn,
	ServTitleEn,
	ServListEn,
	ServBtnEn,
	ProjectsTitleEn,
	ProjectsLinkTextEn,
	ProjectListEn,
	ProjectsBtnEn,
	WorkflowTitleEn,
	WorkflowPasiEn,
	CustomerTitleEn,
	ContactTitleEn,
	CheckboxAgreementTextEn,
	PopUpMessageEn,
	PopUpErrMessageEn,
	FormDataEn,
	ContactDataEn,
	AboutTitleEn,
	TeamMembersEn,
	NewsTitleEn,
	NewsListEn,
} from './DataEn';
import {
	NavItemsRo,
	HeroRo,
	ServQuoteRo,
	ServTitleRo,
	ServListRo,
	ServBtnRo,
	ProjectsTitleRo,
	ProjectsLinkTextRo,
	ProjectListRo,
	ProjectsBtnRo,
	WorkflowTitleRo,
	WorkflowPasiRo,
	CustomerTitleRo,
	ContactTitleRo,
	CheckboxAgreementTextRo,
	PopUpMessageRo,
	PopUpErrMessageRo,
	FormDataRo,
	ContactDataRo,
	AboutTitleRo,
	TeamMembersRo,
	NewsTitleRo,
	NewsListRo,
} from './DataRo';

/* Limba ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const lang = localStorage.getItem('lang');

export const RoFlag = './images/lang/romania.svg';
export const EnFlag = './images/lang/united-kingdom.svg';

/*****************************************************************************/

/* Bara navigatie +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const NavItems = lang === 'ro' ? NavItemsRo : NavItemsEn;

export const NavLogo = './images/logo/logo_nobg.png';

/**************************************************************************/

/* Hero ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
export const Hero = {
	logoSrc: './images/logo/logo_nobg.png',
	motto: lang === 'ro' ? HeroRo.motto : HeroEn.motto,
	cta_text: lang === 'ro' ? HeroRo.cta_text : HeroEn.cta_text,
	cta_link: '/contact',
	cta_type: 'btn--primary',
	cta_size: 'btn--large',
	cta_color: '',
	part2_heading: lang === 'ro' ? HeroRo.part2_heading : HeroEn.part2_heading,
	part2_text: lang === 'ro' ? HeroRo.part2_text : HeroEn.part2_text,
	p2_btn_text: lang === 'ro' ? HeroRo.p2_btn_text : HeroEn.p2_btn_text,
	p2_btn_link: '/about',
	p2_btn_type: 'btn--outline',
	p2_btn_size: 'btn--large',
	p2_btn_color: 'blue',
};

/**************************************************************************/

/* Imagine circuite ++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
export const CircuitsSrc = './images/circuits.svg';

/**************************************************************************/

/* Servicii ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
export const ServQuote = lang === 'ro' ? ServQuoteRo : ServQuoteEn;

export const ServTitle = lang === 'ro' ? ServTitleRo : ServTitleEn;

export const ServList = lang === 'ro' ? ServListRo : ServListEn;

export const ServBtn = {
	text: lang === 'ro' ? ServBtnRo.text : ServBtnEn.text,
	link: lang === 'ro' ? ServBtnRo.link : ServBtnEn.link,
	type: 'btn--outline',
	size: 'btn--wide',
	color: 'white',
};

/**************************************************************************/

/* Proiecte ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const ProjectsTitle = lang === 'ro' ? ProjectsTitleRo : ProjectsTitleEn;

export const ProjectsLinkText =
	lang === 'ro' ? ProjectsLinkTextRo : ProjectsLinkTextEn;

const ProjectListBp = [
	{
		name: '',
		img: './images/projects/img1x1.png',
		img2: './images/projects/img1x2.png',
		alt: 'project1',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img2x1.png',
		img2: './images/projects/img2x2.png',
		alt: 'project2',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img3x1.png',
		img2: './images/projects/img3x2.png',
		alt: 'project3',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img4x1.png',
		img2: './images/projects/img4x2.png',
		alt: 'project4',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img5x1.png',
		img2: './images/projects/img5x2.png',
		alt: 'project5',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img6x1.png',
		img2: './images/projects/img6x2.png',
		alt: 'project6',
		description: '',
		link: '#',
	},
	{
		name: '',
		img: './images/projects/img7x1.png',
		img2: './images/projects/img7x2.png',
		alt: 'project7',
		description: '',
		link: '#',
	},
];

export const ProjectList = ProjectListBp.map((item, index) => {
	if (lang === 'ro') {
		item.name = ProjectListRo[index].name;
		item.description = ProjectListRo[index].description;
		return item;
	} else {
		item.name = ProjectListEn[index].name;
		item.description = ProjectListEn[index].description;
		return item;
	}
});

export const ProjectsBtn = {
	text: lang === 'ro' ? ProjectsBtnRo : ProjectsBtnEn,
	link: '/projects',
	type: 'btn--outline',
	size: 'btn--large',
	color: 'blue',
};

/**************************************************************************/

/* WorkFlow ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const WorkflowTitle = lang === 'ro' ? WorkflowTitleRo : WorkflowTitleEn;

export const WorkflowPasi = lang === 'ro' ? WorkflowPasiRo : WorkflowPasiEn;

/**************************************************************************/

/* Clienti +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const CustomerTitle = lang === 'ro' ? CustomerTitleRo : CustomerTitleEn;

export const CustomerList = [
	{
		name: 'customer1',
		logo: './images/customers/logo-1.svg',
		link: '#',
	},
	{
		name: 'customer2',
		logo: './images/customers/logo-2.svg',
		link: '#',
	},
	{
		name: 'customer3',
		logo: './images/customers/logo-3.svg',
		link: '#',
	},
	{
		name: 'customer4',
		logo: './images/customers/logo-4.svg',
		link: '#',
	},
	{
		name: 'customer5',
		logo: './images/customers/logo-5.svg',
		link: '#',
	},
	{
		name: 'customer6',
		logo: './images/customers/logo-6.svg',
		link: '#',
	},
	{
		name: 'customer7',
		logo: './images/customers/logo-7.svg',
		link: '#',
	},
	{
		name: 'customer8',
		logo: './images/customers/logo-8.svg',
		link: '#',
	},
	{
		name: 'customer9',
		logo: './images/customers/logo-9.svg',
		link: '#',
	},
	{
		name: 'customer10',
		logo: './images/customers/logo-10.svg',
		link: '#',
	},
	{
		name: 'customer11',
		logo: './images/customers/logo-11.svg',
		link: '#',
	},
];

/**************************************************************************/

/* Contact +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const ContactTitle = lang === 'ro' ? ContactTitleRo : ContactTitleEn;

export const MaxFooterMessage = 200;

export const MaxContactMessage = 600;

// forteaza rand nou cu:  $$
export const CheckboxAgreementText =
	lang === 'ro' ? CheckboxAgreementTextRo : CheckboxAgreementTextEn;

export const PopUpMessage = lang === 'ro' ? PopUpMessageRo : PopUpMessageEn;

export const PopUpErrMessage = lang === 'ro' ? PopUpErrMessageRo : PopUpErrMessageEn;

export const FormData = {
	defName: lang === 'ro' ? FormDataRo.defName : FormDataEn.defName,
	defEmail: 'Email',
	defPhone: lang === 'ro' ? FormDataRo.defPhone : FormDataEn.defPhone,
	defCompany: lang === 'ro' ? FormDataRo.defCompany : FormDataEn.defCompany,
	defMessage: lang === 'ro' ? FormDataRo.defMessage : FormDataEn.defMessage,
	btnText: lang === 'ro' ? FormDataRo.btnText : FormDataEn.btnText,
	btnLink: '#',
	btnType: 'btn--pill',
	btnSize: 'btn--wide',
	btnColor: '',
};

export const ContactData = {
	phoneTitle: lang === 'ro' ? ContactDataRo.phoneTitle : ContactDataEn.phoneTitle,
	phone: '0700 000 000',
	emailTitle: 'Email:',
	email: 'email1@dreamonit.ro',
	addressTitle:
		lang === 'ro' ? ContactDataRo.addressTitle : ContactDataEn.addressTitle,
	address: 'Str. oriunde pe harta',
	socialTitle: 'Social',
};

export const SocialData = [
	{
		name: 'Facebook',
		logo: './images/icons/icon_Facebook.svg',
		link: 'https://www.facebook.com/',
	},
	{
		name: 'Instagram',
		logo: './images/icons/icon_Instagram.svg',
		link: 'https://www.instagram.com/',
	},
	{
		name: 'Linkedin',
		logo: './images/icons/icon_Linkedin.svg',
		link: 'https://www.linkedin.com/',
	},
	{
		name: 'Twitter',
		logo: './images/icons/icon_Twitter.svg',
		link: 'https://twitter.com/',
	},
];

/**************************************************************************/

/* About +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const AboutTitle = lang === 'ro' ? AboutTitleRo : AboutTitleEn;

const TeamMembersBp = [
	{
		name: 'Nume 1',
		role: '',
		description: '',
		emai: 'email1@dreamonit.ro',
		img: './images/team/user.svg',
	},
	{
		name: 'Nume 2',
		role: '',
		description: '',
		emai: 'email2@dreamonit.ro',
		img: './images/team/user.svg',
	},
	{
		name: 'Nume 3',
		role: '',
		description: '',
		emai: 'email3@dreamonit.ro',
		img: './images/team/user.svg',
	},
	{
		name: 'Nume 4',
		role: '',
		description: '',
		emai: 'email4@dreamonit.ro',
		img: './images/team/user.svg',
	},
	{
		name: 'Nume 5',
		role: '',
		description: '',
		emai: 'email5@dreamonit.ro',
		img: './images/team/user.svg',
	},
];

export const TeamMembers = TeamMembersBp.map((item, index) => {
	if (lang === 'ro') {
		item.role = TeamMembersRo[index].role;
		item.description = TeamMembersRo[index].description;
		return item;
	} else {
		item.role = TeamMembersEn[index].role;
		item.description = TeamMembersEn[index].description;
		return item;
	}
});

/**************************************************************************/

/* News ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export const NewsTitle = lang === 'ro' ? NewsTitleRo : NewsTitleEn;

export const NewsList = lang === 'ro' ? NewsListRo : NewsListEn;

/**************************************************************************/
