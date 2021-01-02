/**
 * 1. Software should be open for extension , but closed for modification
 * 2. Extend so no need to refactor legacy code
 * 3. Successfull use of inheritance. Allows change to occur easily
 * 4. A well written class should not have to be updated at multiple spots
 */
export class ReportGeneration {

    public reportType: string;

    public generateReport() {
        if (this.reportType == 'CRS') {
            //Crystal report generation logic goes here
        }

        if (this.reportType == "PDF"){
            //PDF report generation logic goes here
        }
    }
}

/**
 * If we want to introduce another new report type like excel then we need to write another if.
 * But class should be closed for modification.
 */