import moment from "moment";
import { FORMAT_HH_MM, FORMAT_DD_MM_YYYY, FORMAT_HH_MM_24 } from "../constants/dateFormats";

export function convertTimeToDate(time) {
	const targetDate = moment(time, FORMAT_HH_MM);
	return targetDate;
}

export function convertDateToTimeHHmm(date) {
	try {
		const targetDate = convertTimeToDate(date);
		const formatDate = moment(targetDate).format(FORMAT_HH_MM_24);
		return formatDate;
	} catch (err) {
		return moment(date).format(FORMAT_HH_MM_24);
	}
}

export function convertToDate(stringDate) {
	const targetDate = moment(stringDate, FORMAT_DD_MM_YYYY);
	return targetDate;
}
