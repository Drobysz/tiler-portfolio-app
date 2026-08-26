import { 
	Golos_Text, 
	Inter,
	Montserrat,
} from "next/font/google"; 

export const inter_regular = Inter({
	weight: '400',
	subsets: ['latin', 'cyrillic'],
	variable: '--font_inter_rg'
});

export const monserrat_regular = Montserrat({
	weight: '400',
	subsets: ['latin', 'cyrillic'],
	variable: '--font_monserrat_rg'
});

export const monserrat_medium = Montserrat({
	weight: '500',
	subsets: ['latin', 'cyrillic'],
	variable: '--font_monserrat_md'
});

export const monserrat_semibold = Montserrat({
	weight: '600',
	subsets: ['latin', 'cyrillic'],
	variable: '--font_monserrat_sm'
});

export const prime_semibold = Golos_Text({
	weight: '600',
	subsets: ['latin', 'cyrillic'],
	variable: '--font-golos-sb'
});

export const prime_medium = Golos_Text({
	weight: '500',
	subsets: ['latin', 'cyrillic'],
	variable: '--font-golos-md'
});

export const prime_regular = Golos_Text({
	weight: '400',
	subsets: ['latin', 'cyrillic'],
	variable: '--font-golos-rg'
});
