import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Link} from "react-router-dom"
import Grid from './Grid'
import PortalData from './resources/portal'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Portal extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggleOblast = this.toggleOblast.bind(this);
        this.toggleTown = this.toggleTown.bind(this);
        this.changeOblast = this.changeOblast.bind(this);
        this.toggleHar = this.toggleHar.bind(this);
        this.addTownToFilterArray = this.addTownToFilterArray.bind(this);
        this.addHarToFilterArray = this.addHarToFilterArray.bind(this);
        this.addYearToFilterArray = this.addYearToFilterArray.bind(this);
        this.toggleYear = this.toggleYear.bind(this);
        this.state = {
            dropdownOblastOpen: false,
            dropdownTownOpen: false,
            dropdownHarOpen: false,
            dropdownYearOpen: false,
            currentOblast: 'Выберите область',
            filters: {
                towns: [],
                years: [],
                harac: []
            }
        };
    }
    
    toggleOblast() {
        this.setState(prevState => ({
            dropdownOblastOpen: !prevState.dropdownOblastOpen
        }));
    }

    toggleHar() {
        this.setState(prevState => ({
            dropdownHarOpen: !prevState.dropdownHarOpen
        }));
    }

    toggleTown() {
        this.setState(prevState => ({
            dropdownTownOpen: !prevState.dropdownTownOpen
        }));
    }

    toggleYear() {
        this.setState(prevState => ({
            dropdownYearOpen: !prevState.dropdownYearOpen
        }));
    }

    changeOblast(event){
        this.setState({'currentOblast': event.currentTarget.textContent});
    }

    addTownToFilterArray(event){
        let { filters } = this.state;
        if (filters.towns.filter((el)=>el === event.currentTarget.textContent).length === 0 ){
            filters.towns.push(event.currentTarget.textContent)
            this.setState({filters: filters})
        }
    }

    addHarToFilterArray(event){
        let { filters } = this.state;
        if (filters.harac.filter((el)=>el === event.currentTarget.textContent).length === 0 ){
            filters.harac.push(event.currentTarget.textContent)
            this.setState({filters: filters})
        }
    }

    addYearToFilterArray(event){
        let { filters } = this.state;
        if (filters.years.filter((el)=>el === event.currentTarget.textContent).length === 0 ){
            filters.years.push(event.currentTarget.textContent)
            this.setState({filters: filters})
        }
    }

    deleteFilter(filter){
        //todo
    }

    getCurrentData(){
        const { filters } = this.state;
        const data = PortalData;
        let newData = [];

        let yearsArr = [], haracArr = [], townArr = [], oblastArr = [];

        // if (filters.towns.length === 0 && filters.harac.length === 0){

        //     Object.keys(data).map((oblast)=>{
        //         Object.keys(data[oblast]).map((town)=>{
        //             Object.keys(data[oblast][town]).map((harac)=>{
        //                 Object.keys(data[oblast][town][harac]).map((year)=>{                            
        //                     if (filters.years.filter(el=> el===year).length > 0){
        //                         yearsArr.push(year);
        //                     }
        //                 })
        //                 if (yearsArr.length > 0){
        //                     haracArr.push({
        //                         harac: harac,
        //                         year:yearsArr
        //                     })
        //                 }
        //             })
        //             if (haracArr.length > 0){
        //                 townArr.push({
        //                     town:town,
        //                     harac:haracArr
        //                 })
        //             }
        //         })
        //         if (townArr.length > 0){
        //             oblastArr.push({
        //                 oblast: oblast,
        //                 town:townArr,
        //             })
        //         }
        //     })
        // }


        return oblastArr;
    }


      
	render(){       
        // const currentData = this.state.filters.towns.length > 0 || this.state.filters.harac.length > 0  
        //     || this.state.filters.years.length > 0 ? this.getCurrentData() : [];
        // console.log(currentData)
		return(
			<div className="jumbotron portal-wrap" style={{background: "#e3f2fd"}}>
                <div class="filters">
                    <Dropdown isOpen={this.state.dropdownOblastOpen} toggle={this.toggleOblast}>
                        <DropdownToggle caret>
                            {this.state.currentOblast}
                        </DropdownToggle>
                        <DropdownMenu>
                            {Object.keys(PortalData).map((key)=>{ 
                                return(<DropdownItem onClick={this.changeOblast} key={key+'oblast'}>{key}</DropdownItem>)
                            })}
                        </DropdownMenu>
                    </Dropdown>

                    {this.state.currentOblast !== 'Выберите область' &&
                        <Dropdown isOpen={this.state.dropdownTownOpen} toggle={this.toggleTown}>
                            <DropdownToggle caret>
                                Город
                            </DropdownToggle>
                            <DropdownMenu>
                                {PortalData[this.state.currentOblast] && Object.keys(PortalData[this.state.currentOblast]).map((key)=>{ 
                                    return(
                                        <DropdownItem onClick={this.addTownToFilterArray} key={key+'city'}>{key}</DropdownItem>
                                    )
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    }

                    <Dropdown isOpen={this.state.dropdownHarOpen} toggle={this.toggleHar}>
                            <DropdownToggle caret>
                                Характеристика
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.addHarToFilterArray}>Население на 1 января</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Население моложе трудоспособного возраста</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Население трудоспособного возраста</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Население старше трудоспособного возраста</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Коэффициент естественного прироста</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Коэффициент смертности</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Коэффициент рождаемости</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Миграционный прирост</DropdownItem>
                                <DropdownItem onClick={this.addHarToFilterArray}>Плотность</DropdownItem>
                            </DropdownMenu>
                    </Dropdown>


                    <Dropdown isOpen={this.state.dropdownYearOpen} toggle={this.toggleYear}>
                            <DropdownToggle caret>
                                Год
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.addYearToFilterArray}>2006</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2007</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2008</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2009</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2010</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2011</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2012</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2013</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2014</DropdownItem>
                                <DropdownItem onClick={this.addYearToFilterArray}>2015</DropdownItem>
                            </DropdownMenu>
                    </Dropdown>

                    <h2> Примененные фильтры </h2>

                    {this.state.filters.towns.map((filter)=>{
                        return (<div>{filter} <span className='delete-filter' onClick={()=>{this.deleteFilter(filter)}}> Удалить </span></div>)
                    })}
                    {this.state.filters.years.map((filter)=>{
                        return (<div>{filter} <span className='delete-filter' onClick={()=>{this.deleteFilter(filter)}}> Удалить </span></div>)
                    })}
                    {this.state.filters.harac.map((filter)=>{
                        return (<div>{filter} <span className='delete-filter' onClick={()=>{this.deleteFilter(filter)}}> Удалить </span></div>)
                    })}
                </div>

                <div class='table'>
                    <table>
                        <thead>
                            <tr> 
                                <th>  </th>
                                <th>  </th>
                                <th colspan='2'> Население моложе трудоспособного возраста </th>
                                <th colspan='2'> Население трудоспособного возраста </th>
                                <th colspan='2'> Население старше трудоспособного возраста </th>
                            </tr>
                        </thead>
                        <thead>
                            <tr> 
                                <th> Область </th>
                                <th> Город </th>
                                <th> 2011 </th>
                                <th> 2015 </th>
                                <th> 2011 </th>
                                <th> 2015 </th>
                                <th> 2011 </th>
                                <th> 2015 </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowspan='2'>МУРМАНСКАЯ</th>

                                <th>город Апатиты</th>
                                <th>9285</th>
                                <th>9580</th>
                                <th>37342</th>
                                <th>34037</th>
                                <th>13021</th>
                                <th>13783</th>

                                
                            </tr>
                            <tr>
                                <th>город Кировск</th>
                                <th>4939</th>
                                <th>5155</th>
                                <th>19016</th>
                                <th>17077</th>
                                <th>6974</th>
                                <th>7226</th>
                            </tr>
                        </tbody>
                    </table>
                </div>

			</div>
		)
	}
}

export default Portal;