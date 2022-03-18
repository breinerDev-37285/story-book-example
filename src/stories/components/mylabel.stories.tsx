import MyLabel from "../../app/components/label";
import { ComponentMeta, ComponentStory } from '@storybook/react';

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args}/>

export const Basic = Template.bind({})

Basic.args = {
    allCaps: false,
    label: 'Label Basico',
    size: 'medium',
}


export const Secondary = Template.bind({})

Secondary.args = {
    color: 'secondary',
    label: 'Label Secundario',
    size: 'medium',
}

export const Large = Template.bind({})

Large.args ={ 
    allCaps: true
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args ={
    fontColor: ''
}


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {
            control: 'select'
        },
        fontColor: {
            control: 'color'
        }
    }
} as ComponentMeta<typeof MyLabel>