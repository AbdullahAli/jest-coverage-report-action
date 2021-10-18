import { parseDetails } from './details/parseDetails';
import { parseSummary } from './summary/parseSummary';
import { getFormattedCoverage } from './getFormattedCoverage';
import { JsonReport } from '../typings/JsonReport';

export const formatCoverage = (
    headReport: JsonReport | undefined,
    baseReport: JsonReport | undefined,
    threshold: number | undefined
): string => {
    if (headReport) {
        console.log(
            '>>>>>>>>>>>>>>>>>>> head report summary',
            parseSummary(headReport)
        );

        console.log(
            '>>>>>>>>>>>>>>>>>>> base report summary',
            parseSummary(baseReport!)
        );

        console.log(
            '>>>>>>>>>>>>>>>>>>> head report details',
            parseDetails(headReport)
        );

        console.log(
            '>>>>>>>>>>>>>>>>>>> base report details',
            parseDetails(baseReport!)
        );

        return getFormattedCoverage(
            parseSummary(headReport),
            baseReport ? parseSummary(baseReport) : undefined,
            parseDetails(headReport),
            baseReport ? parseDetails(baseReport) : undefined,
            threshold
        );
    }

    return '';
};
