import { 
	Golos_Text, 
	Inter,
	Montserrat,
	VT323,
	Bagel_Fat_One,
} from "next/font/google"; 
import localFont from "next/font/local";

export const trade_winds = localFont({
    src: "./TradeWinds.ttf"
});

export const bagel_regular = Bagel_Fat_One({
	weight: '400',
	subsets: ['latin'],
	variable: '--font_bagel_rg'
});

export const vt323_regular = VT323({
	weight: '400',
	subsets: ['latin'],
	variable: '--font_vt323_rg'
});

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
