def maxProfit(prices):
    # Initialize variables
    min_price = float('inf')
    max_profit = 0

    # Loop through the prices to find minimum price and calculate maximum profit
    for price in prices:
        # Update minimum price if current price is lower
        min_price = min(min_price, price)
        
        # Calculate potential profit
        potential_profit = price - min_price
        
        # Update maximum profit if the potential profit is greater
        max_profit = max(max_profit, potential_profit)

    # If no profit is attainable, return the lowest stock price
    return max_profit if max_profit > 0 else min(prices)

# Read input values from stdin
n = int(input())
prices = list(map(int, input().split()))

# Call maxProfit and display the result
result = maxProfit(prices)
print(result)

