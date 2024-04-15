import {componentWrapperDecorator, Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'UI Components/UserListComponent',
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
  },
};