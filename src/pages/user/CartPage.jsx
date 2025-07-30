import React, { useContext } from "react";
import styled from "@emotion/styled";
import { CartContext } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (
    <PageWrapper>
      <CartContainer>
        <CartItems>
          <HeaderRow>
            <HeaderCell>Product</HeaderCell>
            <HeaderCell>Price</HeaderCell>
            <HeaderCell>Quantity</HeaderCell>
            <HeaderCell>Total</HeaderCell>
            <HeaderCell></HeaderCell>
          </HeaderRow>

          {cartItems.length === 0 ? (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          ) : (
            cartItems.map((item) => (
              <ItemRow key={item.id}>
                <ProductCell>
                  <ProductImage src={item.Image} alt={item.Title} />
                  <ProductTitle>{item.Title}</ProductTitle>
                </ProductCell>

                <PriceCell>{parseFloat(item.Price).toFixed(3)} RWF</PriceCell>

                <QuantityCell>
                  <QuantityButton
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    −
                  </QuantityButton>
                  <QuantityInput
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item.id,
                        Math.max(Number(e.target.value), 1)
                      )
                    }
                  />
                  <QuantityButton
                    onClick={() =>
                      updateQuantity(item.id, Math.min(item.quantity + 1, 99))
                    }
                  >
                    +
                  </QuantityButton>
                </QuantityCell>

                <TotalCell>
                  {(item.quantity * parseFloat(item.Price)).toFixed(3)} RWF
                </TotalCell>

                <RemoveCell>
                  <RemoveBtn onClick={() => removeFromCart(item.id)}>
                    🗑️
                  </RemoveBtn>
                </RemoveCell>
              </ItemRow>
            ))
          )}
        </CartItems>

        <Summary>
          <SummaryTitle>BASKET TOTALS</SummaryTitle>

          <CouponSection>
            <CouponLabel>Add a coupon</CouponLabel>
            <CouponInput placeholder="Enter coupon code" />
          </CouponSection>

          <SummaryRow>
            <SummaryLabel>Subtotal</SummaryLabel>
            <SummaryValue>{totalPrice.toFixed(3)} RWF</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>Delivery</SummaryLabel>
            <SummaryValue>FREE</SummaryValue>
            <DeliveryInfo>Free Delivery</DeliveryInfo>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>
              Delivers to <strong>RWANDA</strong>
            </SummaryLabel>
            <RadioGroup>
              <RadioLabel>
                <input type="radio" checked readOnly />
                Free Delivery
              </RadioLabel>
            </RadioGroup>
          </SummaryRow>

          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>{totalPrice.toFixed(3)} RWF</TotalValue>
          </TotalRow>

          <CheckoutBtn onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </CheckoutBtn>
        </Summary>
      </CartContainer>
    </PageWrapper>
  );
}

export default CartPage;

// Styled Components

const PageWrapper = styled.div`
  padding: 40px 20px;
  background: #fff;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
`;

const CartContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;

const CartItems = styled.div`
  flex: 1 1 700px;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1.3fr 1fr 0.5fr;
  font-weight: 600;
  font-size: 14px;
  color: #222;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
  margin-bottom: 15px;
`;

const HeaderCell = styled.div``;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1.3fr 1fr 0.5fr;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
`;

const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const PriceCell = styled.div`
  font-size: 14px;
  color: #666;
`;

const QuantityCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const QuantityButton = styled.button`
  width: 26px;
  height: 26px;
  background: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #e2e2e2;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  height: 28px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

const TotalCell = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

const RemoveCell = styled.div`
  text-align: center;
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ff4757;
  }
`;

const Summary = styled.div`
  width: 300px;
  padding: 30px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
  font-size: 14px;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 18px;
  color: #222;
`;

const CouponSection = styled.div`
  margin-bottom: 20px;
`;

const CouponLabel = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
`;

const CouponInput = styled.input`
  width: 100%;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

const SummaryRow = styled.div`
  margin-bottom: 15px;
`;

const SummaryLabel = styled.div`
  font-weight: 600;
  color: #444;
`;

const SummaryValue = styled.div`
  margin-top: 3px;
  font-weight: 400;
  color: #333;
`;

const DeliveryInfo = styled.div`
  font-size: 12px;
  color: #777;
  margin-top: 4px;
`;

const RadioGroup = styled.div`
  margin-top: 6px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;

  input[type="radio"] {
    cursor: pointer;
  }
`;

const TotalRow = styled.div`
  border-top: 2px solid #eee;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 30px;
`;

const TotalLabel = styled.div``;

const TotalValue = styled.div``;

const CheckoutBtn = styled.button`
  width: 100%;
  background: #ffc107;
  border: none;
  padding: 15px 0;
  font-weight: 700;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background: #e6b800;
  }
`;

const EmptyMessage = styled.div`
  padding: 50px 0;
  text-align: center;
  font-size: 18px;
  color: #999;
`;
