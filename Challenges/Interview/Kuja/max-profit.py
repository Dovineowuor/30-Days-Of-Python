def maxProfit(prices):
    # Check if prices list is empty or has only one price
    if not prices or len(prices) == 1:
        return prices[0] if prices else 0
    
    # Initialize variables
    min_price = float('inf')
    max_profit = 0

    # Loop through the prices to find minimum price and calculate maximum profit
    for price in prices:
        if price < min_price:
            min_price = price
        
        potential_profit = price - min_price
        
        if potential_profit > max_profit:
            max_profit = potential_profit

    # If no profit is attainable, return the lowest stock price
    return max_profit if max_profit > 0 else min(prices)

# Read input values from stdin
n = int(input())
prices = list(map(int, input().split()))

# Call maxProfit and display the result
result = maxProfit(prices)
print(result)

