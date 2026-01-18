FROM mcr.microsoft.com/dotnet/sdk:8.0

WORKDIR /app

# Copy csproj and restore first for caching
COPY *.csproj ./
RUN dotnet restore

# Copy the rest of the code
COPY . .

# Expose port
EXPOSE 8080

# Use dotnet watch for hot reload
CMD ["dotnet", "watch", "run", "--urls", "http://+:8080"]
