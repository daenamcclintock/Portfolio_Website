import React, {useState} from 'react'
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

const Home = () => {
	const [open, setOpen] = useState(false)

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
		<ReactNotifications />
		<Layout open={open} setOpen={setOpen}>
			<BackgroundImage open={open}>
				<Section open={open}>
					<Me open={open}/>
				</Section>
			</BackgroundImage>
			<Projects open={open}/>
			<Technologies open={open}/>
			<Timeline open={open}/>
			<Contact successNotficiation={successNotficiation} failNotification={failNotification} open={open}/>
			<Popover id="o2iHrdTU" />
		</Layout>
	</>
  );
};

export default Home;
