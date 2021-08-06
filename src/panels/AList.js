import React from 'react';
import PropTypes from 'prop-types';

import {
	ActionSheet, ActionSheetItem,
	Avatar,
	Cell,
	Footer,
	Group, IconButton,
	Panel,
	PanelHeader,
	PanelHeaderBack,
	RichCell,
	Search, View
} from '@vkontakte/vkui';
import { Icon28WriteSquareOutline } from '@vkontakte/icons';

import persik from '../img/persik.png';
import './Persik.css';

const thematics = [
	{id: 3201, name: "Токийский сруль"},
	{id: 3273, name: "Гуль из Токио"},
	{id: 3205, name: "Бегущая Тока"},
	{id: 3282, name: "Марьян the @avandi"},

];

class AList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			popout: null,
			activePanel:'default',
			search: '',
		};
		this.onChange = this.onChange.bind(this);
		this.openBase = this.openBase.bind(this);
	}
	onChange (e) { this.setState({ search: e.target.value }); }

	get thematics () {
		const search = this.state.search.toLowerCase();
		return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
	}

	openBase () {
		this.setState({ popout:
				<ActionSheet
					onClose={() => this.setState({ popout: null })}
					iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
				>
					<ActionSheetItem autoclose>
						Редактировать количество серий
					</ActionSheetItem>
					<ActionSheetItem autoclose>
						Редактировать оценку
					</ActionSheetItem>
					<ActionSheetItem autoclose mode="destructive">
						Удалить из списка
					</ActionSheetItem>
				</ActionSheet>
		});
	}

	render()
	{
		//return
		return (
			<View activePanel={this.props.id} popout={this.state.popout}>
				<Panel id={this.props.id} >
					<PanelHeader
					>
						Аниме-лист
					</PanelHeader>
					<Group>
						<Search value={this.state.search} onChange={this.onChange} after={null}/>
						{this.thematics.length > 0 && this.thematics.map(thematic =>  <RichCell
							disabled
							after={<IconButton onClick={this.openBase}> <Icon28WriteSquareOutline /> </IconButton>}
							before={<Avatar size={72} src={null} />}
							caption="10 серий, оценка 5 из 5"
							key={thematic.id}>
							{thematic.name}
						</RichCell>)}
						{this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
					</Group>
				</Panel>
			</View>
		);
	}
}

export default AList;

AList.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
