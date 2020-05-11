package com.company;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {

        //3 apple, 2 banana, others 1
        List<Item> items = Arrays.asList(
                new Item("apple", 10, new BigDecimal("9.99")),
                new Item("banana", 20, new BigDecimal("19.99")),
                new Item("orang", 10, new BigDecimal("29.99")),
                new Item("watermelon", 10, new BigDecimal("29.99")),
                new Item("papaya", 20, new BigDecimal("9.99")),
                new Item("apple", 10, new BigDecimal("9.99")),
                new Item("banana", 10, new BigDecimal("19.99")),
                new Item("apple", 20, new BigDecimal("9.99"))
        );

        List<Item> items2 = Arrays.asList(
                new Item("apple", 10, new BigDecimal("9.99"))
        );

        Map<String, Long> counting = items.stream().collect(
                Collectors.groupingBy(Item::getName, Collectors.counting()));
//        List<Item> test = (List<Item>) Collectors.groupingBy(Item::getName);
//
//        System.out.println(test);

//        List<Item> filteredList = Lists.newArrayList(Collections2.filter(listArticles, Predicates.containsPattern("test")));
//        List<Article> articleList = new ArrayList<Article>();
        List<Item> filteredArticleList= items.stream().filter(article -> article.getQty() == items2.get(0).getQty()).collect(Collectors.toList());
        System.out.println(filteredArticleList.get(0).name);
        System.out.println(counting);

        Map<String, Integer> sum = items.stream().collect(
                Collectors.groupingBy(Item::getName, Collectors.summingInt(Item::getQty)));

        System.out.println(sum);

    }

    public static class Item {

        private String name;
        private int qty;
        private BigDecimal price;

        public Item(String name, int qty, BigDecimal price) {
            this.name = name;
            this.qty = qty;
            this.price = price;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getQty() {
            return qty;
        }

        public void setQty(int qty) {
            this.qty = qty;
        }

        public BigDecimal getPrice() {
            return price;
        }

        public void setPrice(BigDecimal price) {
            this.price = price;
        }
//constructors, getter/setters
    }
}