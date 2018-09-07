import React from 'react';
import {department,eventdetail} from '@ssn/dinofeed';
import {Link} from 'react-router-dom';
import ContactCard from '../components/ContactCard'
import FA from 'react-fontawesome';
import Navigator from '../components/Navigator';
class EventDetail extends React.Component{
	constructor(props){
		super(props);
		
	}
	render(){
		let {dept,slug} = this.props.match.params;
		let event = eventdetail[dept][slug];
		// console.log(event);
		return <div className='col event-detail fluid'>

				<div className='8p-8p maxi960'>
				 		<h1>{event.eventname}</h1>
						{event.tagline && <h5 style={{marginLeft:'0px',marginTop:'-16px',color:'#888'}} className='8m-8m'>{event.tagline}</h5>}

						<div className="fb-like" data-href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} data-layout="standard" data-width='300' data-action="like" data-size="small" data-colorscheme='dark' data-show-faces="true" data-share="true"></div>
						<p>{event.description}</p>

						<div className='row m-col'>
							{event.prize &&<Fielder icon='rupee-sign' content={event.prize}/>}
							{event.internship && <Fielder icon='building' content={event.internship}/>}
						</div>

						<div className='row m-col'>
							{event.timing &&<Fielder icon='clock' content={event.timing}/>}
							{event.venue && <Fielder icon='map' content={event.venue}/>}
						</div>
						<p>{event.attachments[0] && <a href={event.attachments[0]}>Click to view the Attachment</a>}</p>
						<div>
							{event.rules.map((round,i) =><div> Round {i+1}
								<ul>{round.map(x => <li>{x}</li>)}</ul>
							</div>)}
						</div>

						<div>
					{event.notes!="" && <div className='notes'>
					<strong><FA style={{marginRight:'8px'}} name='bullhorn'/>Note </strong>
						{event.notes}
					</div>}
					<div className={'row space-around'}>
						<ContactCard contact={event.eventHeads[0]}/>
						<ContactCard contact={event.eventHeads[1]}/>
					</div>
					<div style={{width:'100%'}}>
<div className="fb-comments" data-href={`https://www.ssninvente.com/fb/events/${dept}/${slug}`} data-width='300'  data-numposts="5"></div>
					</div>
				</div>
				</div>
				</div>;
	};
}


const Fielder = ({icon,content,color})=>
	<div style={{borderColor:color,margin:'8px auto'}}className='fielder row'>
		<div style={{backgroundColor:color,display:'inline-flex',width:'auto'}}className='row centerify'><FA className='icon' name={icon}/></div>
		<div>{content}</div>
	</div>

/*
"degree-in-a-day": {
	"last_updated": "8/29/2018 22:11:08",
	"isTechnical": true,
	"dept": "cse",
	"slug": "degree-in-a-day",
	"venue": "CSE DEPARTMENT",
	"timing": "10 am - 3 pm",
	"displayName": "Degree in a day",
	"description": "Degree in day is a fun filled event where you own a qualitative and not a quantitative degree!",
	"tagline": "Walk in broke ,walk out with a degree",
	"eventname": "Degree in a day",
	"notes": "",
	"prize": "6000",
	"intenship": "No",
	"eventHeads": [
		{
			"name": "Parimala Suresh Congovi",
			"email": "parimala.congovi.12.05@gmail.com",
			"contact": "9487541856"
		},
		{
			"name": "Sakthi Uma Maheswari",
			"email": "sakthiumamaheswari@gmail.com",
			"contact": "9445054935"
		}
	],
	"attachments": [],
	"rules": [
		[
			"The round is for about 30 mins.",
			"You 'll have aptitude MCQ questions.",
			"It'll be a walk in walk out round."
		],
		[
			"The questions will be about data structures,C/C++.",
			"Question types include MCQ, Debugging."
		],
		[
			"This round would contain questions about DBMS, Networks and Operating System."
		]
	]
},

*/

export default EventDetail;
