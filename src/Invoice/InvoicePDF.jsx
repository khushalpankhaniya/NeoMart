import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: "Helvetica" },
  brand: { fontSize: 28, fontWeight: "bold", textAlign: "center", marginBottom: 15, color: "#3498db" },
  invoiceTitle: { fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 25, color: "#2c3e50" },

  section: { marginBottom: 25, padding: 20, borderRadius: 8, backgroundColor: "#f8f9fa", border: "1px solid #ddd" },
  customerTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12, color: "#2c3e50" },

  customerDetails: { flexDirection: "column", gap: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#eee" },
  label: { fontSize: 14, fontWeight: "bold", color: "#333", width: "35%" },
  value: { fontSize: 14, color: "#555", width: "65%", textAlign: "right" },

  table: { marginTop: 20, borderWidth: 1, borderColor: "#ddd", borderRadius: 8 },
  tableHeader: { flexDirection: "row", backgroundColor: "#ecf0f1", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  rowItem: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#eee", paddingVertical: 8 },
  column: { flex: 1, textAlign: "center", fontSize: 13 },

  totalContainer: { marginTop: 20, padding: 15, backgroundColor: "#f0f0f0", borderRadius: 8 },
  totalText: { fontSize: 18, fontWeight: "bold", textAlign: "right" },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 12,
    color: "#777",
  },
});

const InvoicePDF = ({ orderData, cartItems }) => (
  <Document>
    <Page size="A4" style={styles.page}>
    
      <Text style={styles.brand}>NeoMart</Text>
      <Text style={styles.invoiceTitle}>Invoice</Text>

     
      <View style={styles.section}>
        <Text style={styles.customerTitle}>Customer Details</Text>
        <View style={styles.customerDetails}>
          <View style={styles.row}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>{orderData?.fullName || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{orderData?.email || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{orderData?.phone || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{orderData?.address || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Payment Method:</Text>
            <Text style={styles.value}>{orderData?.paymentMethod || "N/A"}</Text>
          </View>
        </View>
      </View>

    
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.column}>Product</Text>
          <Text style={styles.column}>Quantity</Text>
          <Text style={styles.column}>Price</Text>
          <Text style={styles.column}>Total</Text>
        </View>

        {cartItems?.products?.map((product, index) => (
          <View key={index} style={styles.rowItem}>
            <Text style={styles.column}>{product.name}</Text>
            <Text style={styles.column}>{product.quantity}</Text>
            <Text style={styles.column}>₹{product.price}</Text>
            <Text style={styles.column}>₹{(product.quantity * product.price).toFixed(2)}</Text>
          </View>
        ))}
      </View>
    
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Grand Total: ₹ {cartItems?.totalPrice?.toFixed(2) || "0"}</Text>
      </View>

      <Text style={styles.footer}>
        Thank you for shopping with NeoMart!
      </Text>
    </Page>
  </Document>
);

export default InvoicePDF;