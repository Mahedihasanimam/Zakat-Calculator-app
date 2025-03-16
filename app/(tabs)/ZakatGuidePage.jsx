import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ZakatGuidePage = () => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>যাকাত সংক্রান্ত গুরুত্বপূর্ণ তথ্য</Text>

      {/* Quranic Verse */}
      <View style={styles.card}>
        <Text style={styles.verseText}>
          "তাদের সম্পদে প্রার্থী ও বঞ্চিতদের অধিকার রয়েছে" 
          (সূরা আয-যারিয়াত, ৫১:১৯)
        </Text>
      </View>

      {/* Zakat Basics */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>যাকাতের প্রাথমিক নিয়মাবলী</Text>
        <Text style={styles.listItem}>• নিসাব পরিমাণ সম্পদের মালিক হলে</Text>
        <Text style={styles.listItem}>• সম্পদের উপর এক চান্দ্র বছর পূর্ণ হলে</Text>
        <Text style={styles.listItem}>• সম্পদের ২.৫% (৪০ ভাগের ১ ভাগ) প্রদান</Text>
        <Text style={styles.listItem}>• চন্দ্র বছর অনুসারে হিসাব</Text>
      </View>

      {/* Eligible Recipients */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>যাকাত গ্রহণের যোগ্য ৮ শ্রেণী (সূরা তওবা ৯:৬০)</Text>
        {[
          '১. ফকির (অতি দরিদ্র)',
          '২. মিসকিন (নিঃস্ব)',
          '৩. যাকাত আদায়কারী কর্মচারী',
          '৪. নতুন মুসলিম',
          '৫. দাস মুক্তির জন্য',
          '৬. ঋণগ্রস্ত ব্যক্তি',
          '৭. আল্লাহর পথে জিহাদকারী',
          '৮. মুসাফির (যাত্রাবস্থায় অকুলান)'
        ].map((item, index) => (
          <View key={index} style={styles.recipientItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listItem}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Important Notes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>গুরুত্বপূর্ণ নির্দেশনা</Text>
        <Text style={styles.warningText}>
          ⚠️ যাকাত আদায়ের শর্তাবলী:
        </Text>
        <Text style={styles.listItem}>• নিসাব পরিমাণ সম্পদ থাকতে হবে</Text>
        <Text style={styles.listItem}>• সম্পদ উৎপাদনক্ষম হতে হবে</Text>
        <Text style={styles.listItem}>• মৌলিক চাহিদার অতিরিক্ত সম্পদ</Text>
        
        <Text style={styles.warningText}>
          ⚠️ যাকাত বণ্টনের নিয়ম:
        </Text>
        <Text style={styles.listItem}>• একাধিক ব্যক্তিকে দিলে ভালো</Text>
        <Text style={styles.listItem}>• নিকটাত্মীয়কে প্রাধান্য</Text>
        <Text style={styles.listItem}>• গরীব আলিমকে প্রাধান্য</Text>
      </View>

      {/* Common Questions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>সচরাচর জিজ্ঞাসা</Text>
        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.question}>Q: পরিবারের সদস্যদের যাকাত দেওয়া যাবে?</Text>
          <Text style={styles.answer}>A: পিতামাতা, সন্তান ও স্ত্রী ব্যতীত অন্য আত্মীয়দের দেওয়া যাবে</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.faqItem}>
          <Text style={styles.question}>Q: বেতন থেকে যাকাত দিতে হয়?</Text>
          <Text style={styles.answer}>A: বছর শেষে জমাকৃত টাকার উপর যাকাত দিতে হবে</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Resources */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>আরও জানুন</Text>
        <TouchableOpacity onPress={() => openWebsite('https://islamicbank.com.bd/zakat/')}>
          <Text style={styles.linkText}>ইসলামিক ফাউন্ডেশনের যাকাত নির্দেশিকা</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => openWebsite('https://fatwa.islamweb.net/zakat/')}>
          <Text style={styles.linkText}>আন্তর্জাতিক ফাতাওয়া</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 ইসলামিক যাকাত গাইড</Text>
        <Text style={styles.footerNote}>সকল তথ্য কুরআন ও বিশুদ্ধ হাদিস অনুযায়ী প্রদত্ত</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#e8f4f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#3498db',
  },
  verseText: {
    fontSize: 16,
    color: '#2c3e50',
    lineHeight: 24,
    fontStyle: 'italic',
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#27ae60',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
    paddingBottom: 10,
  },
  listItem: {
    fontSize: 15,
    color: '#34495e',
    marginBottom: 8,
    lineHeight: 22,
  },
  recipientItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    color: '#e67e22',
    marginRight: 10,
  },
  warningText: {
    color: '#c0392b',
    fontWeight: '600',
    marginVertical: 10,
  },
  faqItem: {
    backgroundColor: '#f5f6fa',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  question: {
    color: '#2c3e50',
    fontWeight: '500',
    fontSize: 15,
  },
  answer: {
    color: '#7f8c8d',
    marginTop: 5,
    fontSize: 14,
  },
  linkText: {
    color: '#2980b9',
    fontSize: 15,
    paddingVertical: 8,
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 30,
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    color: '#7f8c8d',
    fontSize: 12,
  },
  footerNote: {
    color: '#95a5a6',
    fontSize: 12,
    marginTop: 5,
  },
});

export default ZakatGuidePage;