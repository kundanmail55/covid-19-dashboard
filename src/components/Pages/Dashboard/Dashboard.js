import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { SparkLine, Bar } from 'components/Charts';
import { Table, Card, Button, Spinner } from 'components/Common';
import { connect } from 'react-redux';
import { getCovidRequest, userSignOut } from 'actions/actions';
import { Navbar, LayoutStyle, CountryStyle, GridStyle, Footer } from 'components/Pages/Dashboard';


export class DashboardPage extends Component {
    state = {
        timeSeries: undefined,
        state: undefined,
        chartType: 'Bar',
        loading: true
    }
   
    componentDidMount() {
        this.props.getCovidRequest();
        setTimeout(() => {this.setState({loading: false})}, 2000)
    }

    onClickHandler = (type) => {
        if (type === 'signout') {
            localStorage.removeItem('user_auth');
            this.props.userSignOut();
        }
        else this.setState({chartType: undefined}, () => this.setState({chartType: type}))
    }

    componentDidUpdate = () => {
        const { timeSeries, state } = this.state;
        const { data } = this.props;
        if (!timeSeries && Object.keys(data.countryData).length) {
            this.setState({timeSeries:data.countryData.cases_time_series});
            this.setState({state: data.countryData.statewise[0]});
        } else if (timeSeries && state) return true;
        else return false;
    }

    render () {
        const { timeSeries, state, chartType, loading } = this.state;
        const { data } = this.props;

        if (!data.auth) {
            return <Redirect to='/'/>
        }
        return (
            <>
            <Navbar onClick= {this.onClickHandler}/>
            { !loading && timeSeries && state ?
            <LayoutStyle>
                <div>
                    <div style={{margin:'10px 20px 30px 20px'}}>
                        <CountryStyle >INDIA</CountryStyle>
                        <div style={{fontSize: '12px'}}>Latest Update: {timeSeries[timeSeries.length-1].date}</div>
                    </div>
                    
                    <GridStyle>
                        <Card heading="Confirmed" subheading={Number(state.confirmed).toLocaleString('en-IN')}>
                            <SparkLine color='red' data={timeSeries} type='totalconfirmed'/>
                        </Card>
                        <Card heading="Active" subheading={Number(state.active).toLocaleString('en-IN')}>
                            <SparkLine color='#007bff' data={timeSeries} type='totalactive'/>
                        </Card>
                        <Card heading="Recovered" subheading={Number(state.recovered).toLocaleString('en-IN')}>
                            <SparkLine color='#28a745' data={timeSeries} type='totalrecovered'/>
                        </Card>
                        <Card heading="Deceased" subheading={Number(state.deaths).toLocaleString('en-IN')}>
                            <SparkLine color='#6c757d' data={timeSeries} type='totaldeceased'/>
                        </Card>
                    </GridStyle> 
                    {data.countryData.statewise.length && <Table datatable={data.countryData.statewise}/>}
                </div>
            
                <div >
                    <Button secondary onClick={() => this.onClickHandler('Bar')} disabled={chartType === 'Bar'}>Daily</Button>
                    <Button secondary onClick={() => this.onClickHandler('Line')} disabled={chartType === 'Line'}>Cumulative</Button>
                    {chartType ? 
                    <>
                    <Bar color='red' data={timeSeries} type='totalconfirmed' name="Confirmed Case" chartType={chartType}/><br/>
                    <Bar color='#007bff' data={timeSeries} type='totalactive' name="Active Case" chartType={chartType}/><br/>
                    <Bar color='#28a745' data={timeSeries} type='totalrecovered' name="Recovered Case" chartType={chartType}/><br/>
                    <Bar color='#6c757d' data={timeSeries} type='totaldeceased' name="Deceased Case" chartType={chartType}/></> : null}
                </div>
            </LayoutStyle>: <Spinner/> }
            <Footer/>
            </>
        )
    }
}

const Dashboard = connect(({data}) => ({data}), {getCovidRequest, userSignOut})(DashboardPage)
export { Dashboard }