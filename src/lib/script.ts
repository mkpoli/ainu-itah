import { convertLatnToCyrl, convertLatnToKana } from 'ainconv';

export const latn2kana = (latn: string) => {
	try {
		return convertLatnToKana(latn);
	} catch (e) {
		return latn;
	}
};

export const latn2cyrl = (latn: string) => {
	try {
		return convertLatnToCyrl(latn);
	} catch (e) {
		return latn;
	}
};
