import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import CaseReportByHealthRiskTable from "../healthRisk/CaseReportByHealthRiskTable";
import HealthRiskPerDistrictTable from "../healthRisk/HealthRiskPerDistrictTable";
import OverviewTop from '../OverviewTop/OverviewTop.js';
import Map from "../Map.js";
import CBSNavigation from '../Navigation/CBSNavigation';
import HealthRiskSelector from "../healthRisk/HealthRiskSelector";

const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: process.env.REACT_APP_APP_INSIGHTS_INSTRUMENTATION_KEY,
        maxBatchInterval: 0,
        disableFetchTracking: false
    }
});
appInsights.loadAppInsights();

class CountryOverview extends Component {
    componentDidMount() {
        appInsights.trackPageView({ name: 'National society overview' });
    }

    render() {
        let body = {
            margin: 10,
        }
        return (
            <>
                <CBSNavigation activeMenuItem="analytics" />
                <h1 style={{textAlign: "center", fontFamily: "Lato"}}>CountryOverview</h1>
                <OverviewTop />
                <div className="analytics--container" style={body}>
                    <Typography component="h2" variant="headline" gutterBottom> Overview </Typography>

                    <Grid container spacing={8}>
                        <Grid item xs={6} key="CaseReportByHealthRiskTable" style={{ height: 'auto' }}>
                            <CaseReportByHealthRiskTable />
                        </Grid>
                    </Grid>

                    <HealthRiskPerDistrictTable />
                    <CaseReportByHealthRiskTable />
                    <Map />
                    <HealthRiskSelector />
                </div>
            </>
        );
    }
}

export default CountryOverview;