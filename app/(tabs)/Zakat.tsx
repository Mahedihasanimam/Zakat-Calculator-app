import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const ZakatCalculator: React.FC = () => {
  // Asset States
  const [goldValue, setGoldValue] = useState<string>('');
  const [silverValue, setSilverValue] = useState<string>('');
  const [cashValue, setCashValue] = useState<string>('');
  const [investmentsValue, setInvestmentsValue] = useState<string>('');
  const [businessValue, setBusinessValue] = useState<string>('');
  const [livestockValue, setLivestockValue] = useState<string>('');
  const [cropsValue, setCropsValue] = useState<string>('');
  
  // Liability States
  const [debtsValue, setDebtsValue] = useState<string>('');
  
  // Calculation States
  const [nisabValue, setNisabValue] = useState<string>('87500');
  const [zakatAmount, setZakatAmount] = useState<number | null>(null);
  const [calculationDetails, setCalculationDetails] = useState({
    totalAssets: 0,
    totalDebts: 0,
    netWorth: 0,
  });
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const calculateZakat = () => {
    // Convert values to numbers
    const assets = {
      gold: parseFloat(goldValue) || 0,
      silver: parseFloat(silverValue) || 0,
      cash: parseFloat(cashValue) || 0,
      investments: parseFloat(investmentsValue) || 0,
      business: parseFloat(businessValue) || 0,
      livestock: parseFloat(livestockValue) || 0,
      crops: parseFloat(cropsValue) || 0,
    };

    const debts = parseFloat(debtsValue) || 0;
    const nisab = parseFloat(nisabValue) || 87500;

    // Calculate totals
    const totalAssets = Object.values(assets).reduce((sum, val) => sum + val, 0);
    const netWorth = totalAssets - debts;

    setCalculationDetails({
      totalAssets,
      totalDebts: debts,
      netWorth,
    });

    if (netWorth < nisab) {
      Alert.alert("নিসাব পরিমাণ অর্জন হয়নি", "আপনার মোট সম্পদ নিসাবের চেয়ে কম, যাকাত প্রদান বাধ্যতামূলক নয়।");
      setZakatAmount(null);
    } else {
      setZakatAmount(netWorth * 0.025);
      setModalVisible(true);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>ইসলামিক যাকাত ক্যালকুলেটর</Text>

      {/* Nisab Input */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>নিসাবের পরিমাণ (টাকায়)</Text>
        <TextInput
          style={styles.input}
          placeholder="বর্তমান নিসাবের মূল্য"
          keyboardType="numeric"
          value={nisabValue}
          onChangeText={setNisabValue}
        />
        <Text style={styles.note}>* বর্তমান রূপার মূল্য অনুযায়ী নিসাব: ৬১২.৩৬ গ্রাম রূপা</Text>
      </View>

      {/* Assets Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>আপনার সম্পদ</Text>
        {[
          { label: "স্বর্ণের বাজার মূল্য", value: goldValue, setter: setGoldValue },
          { label: "রূপার বাজার মূল্য", value: silverValue, setter: setSilverValue },
          { label: "নগদ অর্থ/ব্যাংক ব্যালেন্স", value: cashValue, setter: setCashValue },
          { label: "বিনিয়োগ/শেয়ার", value: investmentsValue, setter: setInvestmentsValue },
          { label: "ব্যবসায়িক পণ্যের মূল্য", value: businessValue, setter: setBusinessValue },
          { label: "গবাদি পশুর মূল্য", value: livestockValue, setter: setLivestockValue },
          { label: "ফসলের বাজার মূল্য", value: cropsValue, setter: setCropsValue },
        ].map((field, index) => (
          <View key={index} style={styles.inputGroup}>
            <Text style={styles.label}>{field.label}</Text>
            <TextInput
              style={styles.input}
              placeholder={`${field.label} লিখুন`}
              keyboardType="numeric"
              value={field.value}
              onChangeText={field.setter}
            />
          </View>
        ))}
      </View>

      {/* Liabilities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>দেনা/ঋণ</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>মোট ঋণের পরিমাণ</Text>
          <TextInput
            style={styles.input}
            placeholder="ঋণের পরিমাণ লিখুন"
            keyboardType="numeric"
            value={debtsValue}
            onChangeText={setDebtsValue}
          />
        </View>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity style={styles.calculateButton} onPress={calculateZakat}>
        <Text style={styles.buttonText}>যাকাত হিসাব করুন</Text>
      </TouchableOpacity>

      {/* Results Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>যাকাত হিসাবের ফলাফল</Text>
            
            <View style={styles.resultItem}>
              <Text>মোট সম্পদ:</Text>
              <Text style={styles.amount}>৳ {calculationDetails.totalAssets.toFixed(2)}</Text>
            </View>

            <View style={styles.resultItem}>
              <Text>মোট ঋণ:</Text>
              <Text style={styles.deducted}>- ৳ {calculationDetails.totalDebts.toFixed(2)}</Text>
            </View>

            <View style={styles.divider}/>

            <View style={styles.resultItem}>
              <Text style={styles.netText}>নিট সম্পদ:</Text>
              <Text style={styles.netAmount}>৳ {calculationDetails.netWorth.toFixed(2)}</Text>
            </View>

            <View style={[styles.resultItem, styles.zakatResult]}>
              <Text style={styles.zakatText}>প্রদানযোগ্য যাকাত:</Text>
              <Text style={styles.zakatAmount}>৳ {zakatAmount?.toFixed(2)}</Text>
            </View>

            <Text style={styles.note}>* সম্পদের ২.৫% (৪০ ভাগের ১ ভাগ) হিসাবে যাকাত প্রদান করতে হবে</Text>

            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>বন্ধ করুন</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Footer Notes */}
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>যাকাতের নিয়মাবলী:</Text>
        <Text style={styles.footerText}>
          ১. নিসাব পরিমাণ সম্পদের মালিকানার এক বছর পূর্ণ হলে যাকাত প্রদান বাধ্যতামূলক
        </Text>
        <Text style={styles.footerText}>
          ২. ব্যক্তিগত ব্যবহারের জিনিসপত্র (বাসা, গাড়ি, আসবাবপত্র) যাকাতের হিসাবে ধর্তব্য নয়
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#16a085',
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#7f8c8d',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  note: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 10,
  },
  calculateButton: {
    backgroundColor: '#27ae60',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  amount: {
    color: '#2980b9',
    fontWeight: '500',
  },
  deducted: {
    color: '#c0392b',
  },
  netText: {
    fontWeight: '600',
  },
  netAmount: {
    color: '#16a085',
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
    marginVertical: 15,
  },
  zakatResult: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 2,
    borderColor: '#f1c40f',
  },
  zakatText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  zakatAmount: {
    fontSize: 18,
    color: '#e67e22',
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  footer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
  },
  footerTitle: {
    color: '#2c3e50',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footerText: {
    color: '#7f8c8d',
    marginBottom: 8,
    lineHeight: 20,
  },
});

export default ZakatCalculator;