import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';

type Chat = {
  id: string;
  name: string;
  status: string;
  lastMessage: string;
};

type Message = {
  id: string;
  text: string;
  sender: 'me' | 'other';
};

const App: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState<string>('');
  const [messageHistory, setMessageHistory] = useState<{ [key: string]: Message[] }>({
    '1': [
      { id: '1', text: "Hey, You're selling lemons for $7 right?", sender: 'me' },
      { id: '2', text: 'Yeah, You interested in buying?', sender: 'other' },
      { id: '3', text: "I'd love too! Could I get a small bag?", sender: 'me' },
      { id: '4', text: "I only have 3 dollars that's why", sender: 'me' },
      { id: '5', text: "That's fine, I'll give you a bag for $3, does this work?", sender: 'other' },
    ],
    '2': [],
    '3': [],
  });

  const chats: Chat[] = [
    { id: '1', name: 'Izaac Nathanial Marthell', status: 'Available', lastMessage: "Thats fine, I'll give you a bag for $6..." },
    { id: '2', name: 'Joel Chavez', status: 'Away', lastMessage: 'You - 300 LBS?' },
    { id: '3', name: 'Andrea Sullivan', status: 'Away', lastMessage: "I'm not allowed near that place" },
  ];

  const renderChatItem: ListRenderItem<Chat> = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => setSelectedChat(item.id)}>
      <Text style={styles.chatName}>{item.name}</Text>
      <Text style={styles.chatStatus}>{item.status}</Text>
      <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>
    </TouchableOpacity>
  );

  const renderMessageItem: ListRenderItem<Message> = ({ item }) => (
    <View style={[styles.messageItem, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
      <Text>{item.text}</Text>
    </View>
  );

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const newMessage: Message = { id: Date.now().toString(), text: messageInput, sender: 'me' };
      const updatedMessages = { ...messageHistory };
      if (selectedChat) {
        updatedMessages[selectedChat] = [...(updatedMessages[selectedChat] || []), newMessage];
        setMessageHistory(updatedMessages);
        setMessageInput('');
      }
    }
  };

  return (
    <View style={styles.container}>
      {selectedChat === null ? (
        <View style={styles.chatListContainer}>
          <Text style={styles.title}>Chats</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsText}>⚙️</Text>
          </TouchableOpacity>
          <FlatList
            data={chats}
            renderItem={renderChatItem}
            keyExtractor={(item) => item.id}
            style={styles.chatList}
          />
          <Text style={styles.findVendorsText}>Find some vendors with your favorite produce!</Text>
        </View>
      ) : (
        <View style={styles.chatContainer}>
          <TouchableOpacity onPress={() => setSelectedChat(null)} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <View style={styles.chatHeader}>
            <Text style={styles.chatTitle}>Izaac Nathanial Marthell</Text>
            <TouchableOpacity style={styles.settingsButton}>
              <Text style={styles.settingsText}>⚙️</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={messageHistory[selectedChat]}
            renderItem={renderMessageItem}
            keyExtractor={(item) => item.id}
            style={styles.messageList}
          />
          <TextInput
            placeholder="Type a message"
            style={styles.input}
            value={messageInput}
            onChangeText={setMessageInput}
            onSubmitEditing={handleSendMessage}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  chatListContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingsButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  settingsText: {
    fontSize: 24,
  },
  chatList: {
    marginBottom: 16,
  },
  chatItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatStatus: {
    fontSize: 14,
    color: '#888',
  },
  chatLastMessage: {
    fontSize: 14,
    color: '#666',
  },
  findVendorsText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 16,
  },
  chatContainer: {
    flex: 1,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 24,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  chatTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
  },
  messageItem: {
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  myMessage: {
    backgroundColor: '#e1ffc7',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#f1f1f1',
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginTop: 16,
    marginBottom: 8,
  },
  sendButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
