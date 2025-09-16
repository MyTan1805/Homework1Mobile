import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  // Dùng hook useLocalSearchParams để lấy tham số được truyền đến
  const { message } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.messageText}>
          {/* Hiển thị message, nếu không có thì hiển thị chuỗi rỗng */}
          {message || ''} 
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F2F3', // Nền xám nhạt
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center',     // Căn giữa theo chiều ngang
    paddingHorizontal: 20,     // Thêm padding để text dài không bị sát viền
  },
  messageText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#333333',
    textAlign: 'center', // Căn giữa text nếu nó dài hơn 1 dòng
  },
});

export default ProfileScreen;