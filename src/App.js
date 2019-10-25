import React from 'react';
import connect from '@vkontakte/vk-connect';
import { CellButton, Cell, Div, FormLayout, Group, InfoRow, Input, List, Panel, PanelHeader, Spinner, View, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';
const SERVER_API = 'https://api.lildiary.ru';



connect.subscribe((e) => {

    if (e.detail.type === 'VKWebAppAccessTokenReceived') {
        const { data } = e.detail;
        console.log(data)
        axios.post(`${SERVER_API}/app/stories`, { data })
            .then(res => {

            })
    }
});

class App extends React.Component {
    constructor() {
        super();
    }
    getPermissions() {
        connect.send("VKWebAppGetAuthToken", { "app_id": 7183418, "scope": "stories" });
    }

    render() {
        return (
            <View activePanel="mainPanel">
                <Panel id="mainPanel">
                    <PanelHeader>Добавить историю</PanelHeader>
                    <Group>
                        <FormLayout>
                            <Button size="xl" onClick={this.getPermissions}>Опубликовать историю</Button>
                        </FormLayout>
                    </Group>
                </Panel>
            </View>
        );
    }
}

export default App;
