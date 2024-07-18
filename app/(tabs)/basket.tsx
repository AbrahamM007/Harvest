import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'other';
}

const initialMessages: Message[] = [
  { id: '1', text: 'Hey, You\'re selling lemons for $7 right?', sender: 'user' },
  { id: '2', text: 'Yeah, You interested in buying?', sender: 'other' },
  { id: '3', text: 'I\'d love to! Could I get a small bag? I only have 3 dollars that\'s why.', sender: 'user' },
  { id: '4', text: 'That\'s fine, I\'ll give you a bag for $3, does this work?', sender: 'other' },
];

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Date.now().toString(), text: inputText, sender: 'user' },
      ]);
      setInputText('');
    }
  };

  const renderItem = ({ item }: { item: Message }) => (
    <View style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={messages} renderItem={renderItem} keyExtractor={item => item.id} style={styles.chatList} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatList: {
    flex: 1,
    padding: 16,
  },
  message: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 8,
  },
});

export default Chat;
