import { ArrowUpward } from "@mui/icons-material";
import {
  Button,
  Drawer,
  Box,
  Typography,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { PaymentData } from "../../types";
import { usePaymentStyles } from "./styles";

interface PatientPaymentsProps {
  payments: PaymentData[];
  open: boolean;
  onClose: () => void;
}

const PatientPayments = ({ open, onClose, payments }: PatientPaymentsProps) => {
  const styles = usePaymentStyles();

  return (
    <>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{ "& .MuiDrawer-paper": styles.drawerPaper }}
      >
        <Typography variant="h6" gutterBottom>
          Payment Details
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ overflowY: "auto" }}>
          {payments.map((payment) => (
            <Box key={payment.id} sx={styles.section}>
              <Typography variant="subtitle1" sx={styles.subtitle}>
                {payment.description}
              </Typography>

              {/* Metadata in two columns */}
              <Box sx={styles.detailGrid}>
                <Typography sx={styles.detailItem}>
                  <strong>Total:</strong> ${payment.total.toFixed(2)}
                </Typography>
                <Typography sx={styles.detailItem}>
                  <strong>Status:</strong>{" "}
                  {payment.status.replace("_", " ").toLowerCase()}
                </Typography>
                <Typography sx={styles.detailItem}>
                  <strong>Outstanding:</strong>{" "}
                  {payment.totalOutstanding?.toFixed(2) || "$0.00"}
                </Typography>
                <Typography sx={styles.detailItem}>
                  <strong>Patient:</strong> {payment.patient.firstName}{" "}
                  {payment.patient.lastName}
                </Typography>

                {payment.comment && (
                  <Typography sx={styles.detailItem}>
                    <strong>Comment:</strong> {payment.comment}
                  </Typography>
                )}

                {payment.payments?.[0]?.paymentMethod && (
                  <>
                    <Typography sx={styles.detailItem}>
                      <strong>Payment Method:</strong>{" "}
                      {payment.payments[0].paymentMethod.brand} ending in{" "}
                      {payment.payments[0].paymentMethod.last4}
                    </Typography>
                    <Typography sx={styles.detailItem}>
                      <strong>Payment Date:</strong>{" "}
                      {new Date(
                        payment.payments[0].createdDate
                      ).toLocaleString()}
                    </Typography>
                  </>
                )}
              </Box>

              {/* Line Items Table */}
              <TableContainer sx={{ mt: 2 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography fontWeight="bold">Item</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">Category</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight="bold">Price</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {payment.items.map((item) => (
                      <TableRow key={item.item_id}>
                        <TableCell>{item.item.name}</TableCell>
                        <TableCell>{item.item.category}</TableCell>
                        <TableCell align="right">
                          ${item.item.price.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default PatientPayments;
