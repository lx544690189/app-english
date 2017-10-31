import Header from './header';
import Footer from './footer';
import Container from './container';
import Card from './card';
import Chat from './chat';
import ChatInput from './chat-input';
import Evaluate from './evaluate';

const install = function (Vue) {
  Vue.component(Header.name, Header);
  Vue.component(Footer.name, Footer);
  Vue.component(Container.name, Container);
  Vue.component(Card.name, Card);
  Vue.component(Chat.name, Chat);
  Vue.component(ChatInput.name, ChatInput);
  Vue.component(Evaluate.name, Evaluate);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  Header,
  Footer,
  Container,
  Card,
  Chat,
  ChatInput,
  Evaluate
}
