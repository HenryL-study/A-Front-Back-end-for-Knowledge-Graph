#知识图谱

随着互联网上信息的爆炸性增长，怎样快速准确地找到想要搜索到的信息成为了当今互联网技术面临的一个重要问题。知识图谱是一种结构化知识库，它的目标是描述真实世界中存在的各种实体和概念，及实体概念之间的关联关系，从而改善搜索结果，准确地向用户反馈信息。本系统的初步定位为一个智能的问答系统，它能够将问题的答案及获得答案的过程以图形化的形式简洁美观地呈现出来。

在查询算法上面，我们对用户输入的问句进行语法分析和转换为SPARQL语句后进行查询重写，然后调用之前在本地经过离线推理后的知识图谱信息，对查询重写后的语句在12台机器上进行分布式查询，最终将查询结果返回给前端。为了更好的展示效果，前端我们使用了

ECharts工具，将返回的结果以图的形式展现出来。

##### EN

With the explosive growth of information in the Internet, how to get the information you want swiftly has
become an important problem that the Internet technology need to deal with urgently. Knowledge Graph is a kind of structing database, whose aim is to descript entities and concepts as well as relationships between them in the real world, which shill improve the results and respond with information correctly for users. 

This system is an intelligent request-answering system, which can present the answer of the problem and the progress of acquiring the answer in the form of a simple and handsome graph. As for the query algorithm, after user’s question has been parsed and converted into SPARQL statements, we rewrite the SPARQL statements. Then we call the knowledge graph information that the computer have been reasoned offline to query the rewriting statements on 12 computers in the form of distributing query. Finally, we return the queried results to the fore-end. To better show the relationships  between those results, we design our fore-end with ECharts, and the results as well as their relationships are displayed just in one graph.

 