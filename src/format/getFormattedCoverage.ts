import { formatCoverageDetails } from './details/formatCoverageDetails';
import { formatCoverageSummary } from './summary/formatCoverageSummary';
import { CoverageDetailsMap, CoverageSummary } from '../typings/Coverage';

export const getFormattedCoverage = (
    headSummary: Array<CoverageSummary>,
    baseSummary: Array<CoverageSummary> | undefined,
    headDetails: CoverageDetailsMap,
    baseDetails: CoverageDetailsMap | undefined,
    threshold: number | undefined
): string => {
    console.log('>>>>>>>>>>>>>>>>> formatted coverage');

    console.log(
        '>>>>>>>>>>>>>>>>>>>coverage summary',
        formatCoverageSummary(headSummary, baseSummary, threshold)
    );

    console.log(
        '>>>>>>>>>>>>>>>>>>>coverage details',
        formatCoverageDetails(headDetails, baseDetails, threshold)
    );

    const x = [
        formatCoverageSummary(headSummary, baseSummary, threshold),
        formatCoverageDetails(headDetails, baseDetails, threshold),
    ]
        .filter(Boolean)
        .join('\n');

    console.log('>>>>>>>>>>>>>>>>> results', x);

    return x;
};
