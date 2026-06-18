import {
	convertCyrlToLatn,
	convertKanaToLatn,
	convertLatnToCyrl,
	convertLatnToKana
} from 'ainconv';

export const latn2kana = (latn: string) => {
	try {
		return convertLatnToKana(latn);
	} catch {
		return latn;
	}
};

export const latn2cyrl = (latn: string) => {
	try {
		return convertLatnToCyrl(latn);
	} catch {
		return latn;
	}
};

export const kana2latn = (kana: string) => {
	try {
		return convertKanaToLatn(kana);
	} catch {
		return kana;
	}
};

export const cyrl2latn = (cyrl: string) => {
	try {
		return convertCyrlToLatn(cyrl);
	} catch {
		return cyrl;
	}
};
