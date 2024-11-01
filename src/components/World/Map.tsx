"use client";

import * as d3 from "d3";
import { json } from "d3";
import { useEffect, useRef } from "react";
import { feature } from "topojson-client";
import { MapDiv } from "@/styles/WorldMapPageStyle";
import { PlantList } from "@/types";

const Map = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderMap = () => {
      d3.select(ref.current).selectAll("svg").remove();

      const width = ref.current?.clientWidth || 0;
      const height = ref.current?.clientHeight || 0;

      const svg: any = d3
        .select(ref.current)
        .append("svg")
        .attr("viewpoint", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr(
          "style",
          "width: 100%; height: 100%; max-width: 100%; max-height: 100%; color: white;",
        );

      const projection = d3
        .geoNaturalEarth1()
        .center([10, 0])
        .scale(width / 5)
        .translate([width / 2, height / 2]);

      const geoGenerator = d3.geoPath().projection(projection);

      json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((data: any) => {
        const countries: any = feature(data, data.objects.countries);
        const plantlist: PlantList[] = require("/public/data/data.json");

        const mapData = plantlist.map((data) => data.info.native);

        const g = svg.append("g");

        g.selectAll("path")
          .data(countries.features)
          .enter()
          .append("path")
          .attr("class", "country")
          .attr("d", geoGenerator as any)
          .attr("fill", (d: any) => (mapData.includes(d.properties.name) ? "#A7B04B" : "#fff"))
          .attr("stroke", "#d5d5d5")
          .append("title")
          .text((d: any) => d.properties.name);

        // 이미지, 라벨 group
        const labelGroup = g
          .selectAll(".country-group")
          .data(countries.features.filter((d: any) => mapData.includes(d.properties.name)))
          .enter()
          .append("g")
          .attr("class", "country-group")
          .attr("transform", (d: any) => {
            const coords = projection(d3.geoCentroid(d));
            return coords ? `translate(${coords[0]}, ${coords[1]})` : "translate(0, 0)";
          });

        labelGroup.each((d: any, i: number, nodes: any) => {
          const group = d3.select(nodes[i]);

          // 이미지 추가
          group
            .append("image")
            .attr("xlink:href", (d: any) =>
              mapData.includes(d.properties.name)
                ? plantlist[mapData.indexOf(d.properties.name)].imgSrc
                : "/",
            )
            .attr("x", width <= 650 ? -10 : -15)
            .attr("y", -20)
            .attr(
              "style",
              width <= 650 ? "width: 20px; height: 20px;" : "width: 30px; height: 30px;",
            )
            .append("title")
            .text((d: any) =>
              mapData.includes(d.properties.name)
                ? plantlist[mapData.indexOf(d.properties.name)].detailName
                : "",
            );

          // 라벨 추가
          group
            .append("text")
            .attr("dy", width <= 650 ? "1em" : "2em")
            .attr("text-anchor", "middle")
            .attr("style", "fill: #292929; font-size: 11px; font-weight: 600;")
            .text(d.properties.name);
        });

        // Zoom functionality
        const zoom = d3
          .zoom()
          .scaleExtent([1, 8])
          .on("zoom", (event: any) => {
            g.attr("transform", event.transform);

            // Adjust the size of labels and images based on zoom level
            labelGroup.selectAll("text");

            labelGroup
              .selectAll("image")
              .attr("width", event.transform.k)
              .attr("height", event.transform.k);
          });

        svg.call(zoom);
      });
    };

    renderMap();

    // 페이지 크기에 따라 조정되는 resize 이벤트
    window.addEventListener("resize", renderMap);

    return () => window.removeEventListener("resize", renderMap);
  }, []);

  return <MapDiv ref={ref} />;
};

export default Map;
