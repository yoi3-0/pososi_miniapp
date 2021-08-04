import React from 'react';
import PropTypes from 'prop-types';

import {Group, Panel, PanelHeader, PanelHeaderBack, Search} from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
		>
			Persik
		</PanelHeader>
		<Group>
			<Search value={null} onChange={null} after={null}/>
		</Group>
		<img className="Persik" src={persik} alt="Persik The Cat"/>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
