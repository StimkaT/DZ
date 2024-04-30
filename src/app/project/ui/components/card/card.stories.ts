import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'UI Components/CardComponent',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
    componentWrapperDecorator(
      (story) => `<div>${story}</div>`
    ),
  ],
  render: (args: CardComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {
    card: { id: 1, name: 'Table', cost: 12, description: 'description1', image: 'assets/img/1.jpg'}
  },
};