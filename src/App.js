import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {View, ScreenSpinner, AdaptivityProvider, AppRoot, Epic, Tabbar, TabbarItem} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import AList from './panels/AList';
import {Icon28NewsfeedOutline, Icon28ServicesOutline} from "@vkontakte/icons";

const App = () => {
	const [activePanel, setActivePanel] = useState('profile');
	const [fetchedUser, setUser] = useState(null);
	const [activeStory, setActiveStory] = React.useState('profile');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const onStoryChange = (e) => {
		setActiveStory(e.currentTarget.dataset.story)
		setActivePanel(e.currentTarget.dataset.story)
	};

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='profile' fetchedUser={fetchedUser} go={go} />
					<AList id='AList' go={go} />
				</View>
				<Epic activeStory={activeStory} tabbar={
					<Tabbar>
						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'AList'}
							data-story="AList"
							text="Аниме-лист"
						><Icon28NewsfeedOutline /></TabbarItem>
						<TabbarItem
							onClick={onStoryChange}
							selected={activeStory === 'profile'}
							data-story="profile"
							text="Сервисы"
						><Icon28ServicesOutline/></TabbarItem>
					</Tabbar>
				}>
				</Epic>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
