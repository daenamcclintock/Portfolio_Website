import React, { useState, useEffect } from 'react'
import Contact from '../components/Contact/Contact';
import Me from '../components/Me/Me';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { BackgroundImage } from '../components/Me/MeStyles';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.min.css';
import { Popover } from '@typeform/embed-react'
import axios from 'axios';

const Home = () => {
	const [open, setOpen] = useState(false)
	const [ip, setIp] = useState(null)
	const [visitor, setVisitor] = useState(null)
	const [ipDetected, setIPDetected] = useState(false)

	const getIp = async () => {
		const res = await axios.get('https://geolocation-db.com/json/')
		console.log('IP User Data', res.data);
		setIp(res.data.IPv4)
		if (res.data.IPv4) {
			setIPDetected(true)
		}
		return res.data
	}
	
	useEffect(() => {
		const ipInfo = async () => {
			await getIp()
				.then((result) => {
					setVisitor(result)
				})
				.catch((error) => {
					console.log(error)
				})
		}
		ipInfo()
	})

	const successNotficiation = () => {
		Store.addNotification({
			title: "Success!",
			message: "Message successfully sent!",
			type: "success",
			container: "center",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
			  duration: 5000,
			  onScreen: true
			}
		});
	}

	const failNotification = () => {
		Store.addNotification({
			title: "Error",
			message: "Failed to send message. Please reload and try again.",
			type: "danger",
			container: "center",
			animationIn: ["animate__animated", "animate__fadeIn"],
			animationOut: ["animate__animated", "animate__fadeOut"],
			dismiss: {
				duration: 5000,
				onScreen: true,
				pauseOnHover: true,
			}
		});
	}

  return (
	<>
		{ipDetected ?
		<div>
			<h1>Your IP address is: {ip}</h1>
			<h2>Your location is: {visitor.city}, {visitor.state} {visitor.country_name} {visitor.postal}</h2>
		</div>
		:
		<>
			<ReactNotifications />
			<Layout open={open} setOpen={setOpen}>
				<BackgroundImage open={open}>
					<Section open={open}>
						<Me open={open} />
					</Section>
				</BackgroundImage>
				<Projects open={open}/>
				<Technologies open={open}/>
				<Timeline open={open}/>
				<Contact successNotficiation={successNotficiation} failNotification={failNotification} open={open}/>
				<Popover id="o2iHrdTU" />
			</Layout>
		</>
		}
	</>
  );
};

export default Home;
